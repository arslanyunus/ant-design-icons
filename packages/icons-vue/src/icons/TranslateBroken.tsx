// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslateBrokenSvg from '@ant-design/icons-svg/lib/asn/TranslateBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslateBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslateBroken: TranslateBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateBrokenSvg}></AntdIcon>;
};

TranslateBroken.displayName = 'TranslateBroken';
TranslateBroken.inheritAttrs = false;
export default TranslateBroken;