// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareBoldSvg from '@ant-design/icons-svg/lib/asn/MinusSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareBold: MinusSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareBoldSvg}></AntdIcon>;
};

MinusSquareBold.displayName = 'MinusSquareBold';
MinusSquareBold.inheritAttrs = false;
export default MinusSquareBold;