// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTickBoldSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTickBold: BrifecaseTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTickBoldSvg}></AntdIcon>;
};

BrifecaseTickBold.displayName = 'BrifecaseTickBold';
BrifecaseTickBold.inheritAttrs = false;
export default BrifecaseTickBold;