// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusBoldSvg from '@ant-design/icons-svg/lib/asn/MinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusBold: MinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusBoldSvg}></AntdIcon>;
};

MinusBold.displayName = 'MinusBold';
MinusBold.inheritAttrs = false;
export default MinusBold;