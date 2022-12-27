// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/MinusSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareBroken: MinusSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareBrokenSvg}></AntdIcon>;
};

MinusSquareBroken.displayName = 'MinusSquareBroken';
MinusSquareBroken.inheritAttrs = false;
export default MinusSquareBroken;