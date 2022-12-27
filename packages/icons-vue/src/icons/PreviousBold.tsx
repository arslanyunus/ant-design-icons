// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviousBoldSvg from '@ant-design/icons-svg/lib/asn/PreviousBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PreviousBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PreviousBold: PreviousBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PreviousBoldSvg}></AntdIcon>;
};

PreviousBold.displayName = 'PreviousBold';
PreviousBold.inheritAttrs = false;
export default PreviousBold;