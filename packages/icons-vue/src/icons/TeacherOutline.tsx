// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeacherOutlineSvg from '@ant-design/icons-svg/lib/asn/TeacherOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeacherOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeacherOutline: TeacherOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeacherOutlineSvg}></AntdIcon>;
};

TeacherOutline.displayName = 'TeacherOutline';
TeacherOutline.inheritAttrs = false;
export default TeacherOutline;