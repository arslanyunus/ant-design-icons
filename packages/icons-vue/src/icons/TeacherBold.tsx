// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeacherBoldSvg from '@ant-design/icons-svg/lib/asn/TeacherBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeacherBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeacherBold: TeacherBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeacherBoldSvg}></AntdIcon>;
};

TeacherBold.displayName = 'TeacherBold';
TeacherBold.inheritAttrs = false;
export default TeacherBold;