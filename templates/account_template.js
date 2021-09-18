import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { COLORS, DIMENSION, FONT_SIZE, ROBOTO_FONT } from '../utils/constant';
import HOC_Background from '../components/other_components/hoc_bg';
import { Formik } from 'formik';
import InputComp from '../components/other_components/input_comp';
import ButtonComp from '../components/other_components/button_comp';
import TwoColsComp from '../components/other_components/twoCols_comp';

export function input({handleChange, values, errors, touched, field, index}) {

  // const { field, index, handleChange, values, errors, touched} = props

  return(
    <InputComp
      key={`login-${index}`} 
      label={field.label}
      placeholder={field.placeholder}
      value={values[field.fieldName]}
      onChange={handleChange[field.fieldName]}
      isError={errors[field.fieldName] && touched[field.fieldName]}
      errorText={errors[field.fieldName]}
      isSecure={field.isSecure}
      ftIcon={field.ftIcon}
      bkIcon={field.bkIcon}
      bkIconAfter={field.bkIconAfter}
      bkIconPress={field.bkIconPress}
    />
  )
}

export default function AccountTemplate (props) {

  const { screenTitle, inputFields , handleSubmit, submitButton, combineFields = [] } = props

  const getInitialValuse = () => (
    inputFields.map(field=>(
      {[field.fieldName]:'test'}
    ))
  )

  return(
    <View style={styles.container}>
      <HOC_Background>
      <Text style={styles.screenTitle}>{screenTitle}</Text>
        <View style={styles.content}>
          {props.preCaution}
          <Formik
            initialValues={getInitialValuse()}
            onSumbit={values=>handleSubmit(values)}
          >
            {({handleChange, handleSubmit, values, errors, touched}) => {

              // const {handleChange, handleSubmit, values, errors, touched} = props

              // const input = (field, index) => (
              //   <InputComp
              //     key={`login-${index}`} 
              //     label={field.label}
              //     placeholder={field.placeholder}
              //     value={values[field.fieldName]}
              //     onChange={handleChange[field.fieldName]}
              //     isError={errors[field.fieldName] && touched[field.fieldName]}
              //     errorText={errors[field.fieldName]}
              //     isSecure={field.isSecure}
              //     ftIcon={field.ftIcon}
              //     bkIcon={field.bkIcon}
              //     bkIconAfter={field.bkIconAfter}
              //     bkIconPress={field.bkIconPress}
              //   />
              // )

              const inputList = inputFields
              .filter(field=>(!combineFields.includes(field.fieldName)))
              .map((field, index)=>input({field, index, handleChange, values, errors, touched}))
              
              const combineList = inputFields.filter(field=>combineFields.includes(field.fieldName))

              const anotherList = combineList.map((field,index,)=>{
                if (index % 2 == 0){
                  return (
                    <TwoColsComp
                      leftComp={input({ field: combineList[index] , index: index, handleChange, values, errors, touched})}
                      leftStyle={{alignItems:null, paddingRight: 5}}
                      rightComp={input({ field: combineList[index+1] , index: index+1, handleChange, values, errors, touched})}
                      rightStyle={{alignItems:null, paddingLeft: 5}}
                    />
                  )
                }
              })
              return [...inputList, ...anotherList]
            }}
          </Formik>
          {props.beforeBtn}
          <ButtonComp
            title={submitButton.title}
            style={submitButton.style}
            onPress={handleSubmit}
            disabled={submitButton.disabled}
          />
          {props.children}
        </View>
      </HOC_Background>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginTop: 25,
    marginBottom: 30,
    width: '95%',
    alignSelf:'center',
  },
  screenTitle: {
    paddingRight: 10,
    marginTop: DIMENSION.width * 0.15,
    fontSize: FONT_SIZE.title_1 + 5,
    color: COLORS.BLACK,
    textAlign: 'right',
    fontFamily: ROBOTO_FONT.condense.bold,
    marginBottom: DIMENSION.width * 0.05,
  },
});
