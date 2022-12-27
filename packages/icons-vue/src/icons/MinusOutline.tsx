// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusOutlineSvg from '@ant-design/icons-svg/lib/asn/MinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusOutline: MinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusOutlineSvg}></AntdIcon>;
};

MinusOutline.displayName = 'MinusOutline';
MinusOutline.inheritAttrs = false;
export default MinusOutline;