// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordOutlineSvg from '@ant-design/icons-svg/lib/asn/RecordOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordOutline: RecordOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordOutlineSvg}></AntdIcon>;
};

RecordOutline.displayName = 'RecordOutline';
RecordOutline.inheritAttrs = false;
export default RecordOutline;