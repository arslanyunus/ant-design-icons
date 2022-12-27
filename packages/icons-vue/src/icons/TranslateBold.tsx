// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslateBoldSvg from '@ant-design/icons-svg/lib/asn/TranslateBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslateBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslateBold: TranslateBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateBoldSvg}></AntdIcon>;
};

TranslateBold.displayName = 'TranslateBold';
TranslateBold.inheritAttrs = false;
export default TranslateBold;