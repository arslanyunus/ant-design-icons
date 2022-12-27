// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordLinearSvg from '@ant-design/icons-svg/lib/asn/RecordLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordLinear: RecordLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordLinearSvg}></AntdIcon>;
};

RecordLinear.displayName = 'RecordLinear';
RecordLinear.inheritAttrs = false;
export default RecordLinear;