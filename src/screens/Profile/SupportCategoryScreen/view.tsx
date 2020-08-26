import React from 'react';
import {View, TextInput, TouchableWithoutFeedback, Text, ScrollView, Dimensions} from 'react-native'
import Button from "@components/common/Button";
import {strings} from "@constants/index";
import AttachFileIcon from "@assets/icons/AttachmentFileIcon";
import styles from "./styles";

const SupportCategoryScreenView = () => {
    const Container = Dimensions.get('window').height > 700 ? View : ScrollView;
    return (
        <Container style={styles.container}>
            <View style={{paddingHorizontal: 20, flex: 1}}>
                <Text style={styles.title}>
                    Трагедия Пушкина «Моцарт и Сальери» занимает всего десять страниц. О чем она? О зависти или о том,
                    что
                    «гений и злодейство – две вещи несовместные»? Есть ли оправдание Сальери, который, по версии
                    Пушкина,
                    отравил Моцарта?
                </Text>
                <Text style={styles.comment}>Комментарий</Text>
                <View style={styles.textarea}>
                    <TextInput
                        multiline={true}
                        placeholder={'Напишите ваш отзыв'}
                    />
                </View>
                <TouchableWithoutFeedback>
                    <View>
                        <Text style={styles.attachFileText}>Прикрепите скрин</Text>
                        <View style={styles.attachFile}>
                            <Text style={styles.download}>Загрузить</Text>
                            <AttachFileIcon/>
                            <View style={styles.border}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <Button
                    onPress={() => null}
                    text={strings.send as string}
                    containerStyle={{marginBottom: 33}}
                />
            </View>
        </Container>
    );
};


export default SupportCategoryScreenView;
