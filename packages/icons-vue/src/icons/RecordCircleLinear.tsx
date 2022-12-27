// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecordCircleLinearSvg from '@ant-design/icons-svg/lib/asn/RecordCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecordCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecordCircleLinear: RecordCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecordCircleLinearSvg}></AntdIcon>;
};

RecordCircleLinear.displayName = 'RecordCircleLinear';
RecordCircleLinear.inheritAttrs = false;
export default RecordCircleLinear;