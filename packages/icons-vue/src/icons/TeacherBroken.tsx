// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeacherBrokenSvg from '@ant-design/icons-svg/lib/asn/TeacherBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeacherBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeacherBroken: TeacherBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeacherBrokenSvg}></AntdIcon>;
};

TeacherBroken.displayName = 'TeacherBroken';
TeacherBroken.inheritAttrs = false;
export default TeacherBroken;