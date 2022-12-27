// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TeacherBulkSvg from '@ant-design/icons-svg/lib/asn/TeacherBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TeacherBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TeacherBulk: TeacherBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TeacherBulkSvg}></AntdIcon>;
};

TeacherBulk.displayName = 'TeacherBulk';
TeacherBulk.inheritAttrs = false;
export default TeacherBulk;