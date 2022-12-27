// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareLinearSvg from '@ant-design/icons-svg/lib/asn/MinusSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareLinear: MinusSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareLinearSvg}></AntdIcon>;
};

MinusSquareLinear.displayName = 'MinusSquareLinear';
MinusSquareLinear.inheritAttrs = false;
export default MinusSquareLinear;