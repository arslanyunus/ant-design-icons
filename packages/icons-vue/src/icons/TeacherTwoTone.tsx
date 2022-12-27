// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeacherTwoToneSvg from '@ant-design/icons-svg/lib/asn/TeacherTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeacherTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeacherTwoTone: TeacherTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeacherTwoToneSvg}></AntdIcon>;
};

TeacherTwoTone.displayName = 'TeacherTwoTone';
TeacherTwoTone.inheritAttrs = false;
export default TeacherTwoTone;