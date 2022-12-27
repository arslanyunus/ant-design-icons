// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceivedLinearSvg from '@ant-design/icons-svg/lib/asn/ReceivedLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceivedLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceivedLinear: ReceivedLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceivedLinearSvg}></AntdIcon>;
};

ReceivedLinear.displayName = 'ReceivedLinear';
ReceivedLinear.inheritAttrs = false;
export default ReceivedLinear;