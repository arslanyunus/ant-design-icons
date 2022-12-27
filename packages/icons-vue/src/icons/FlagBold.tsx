// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagBoldSvg from '@ant-design/icons-svg/lib/asn/FlagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagBold: FlagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagBoldSvg}></AntdIcon>;
};

FlagBold.displayName = 'FlagBold';
FlagBold.inheritAttrs = false;
export default FlagBold;