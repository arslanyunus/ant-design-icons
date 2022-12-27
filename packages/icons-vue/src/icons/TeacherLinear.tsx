// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeacherLinearSvg from '@ant-design/icons-svg/lib/asn/TeacherLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeacherLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeacherLinear: TeacherLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeacherLinearSvg}></AntdIcon>;
};

TeacherLinear.displayName = 'TeacherLinear';
TeacherLinear.inheritAttrs = false;
export default TeacherLinear;