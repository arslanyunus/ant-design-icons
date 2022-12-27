// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/ColorsSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquareOutline: ColorsSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquareOutlineSvg}></AntdIcon>;
};

ColorsSquareOutline.displayName = 'ColorsSquareOutline';
ColorsSquareOutline.inheritAttrs = false;
export default ColorsSquareOutline;