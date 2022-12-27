// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareOutline: MinusSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareOutlineSvg}></AntdIcon>;
};

MinusSquareOutline.displayName = 'MinusSquareOutline';
MinusSquareOutline.inheritAttrs = false;
export default MinusSquareOutline;