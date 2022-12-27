// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/BrifecaseCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseCrossOutline: BrifecaseCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseCrossOutlineSvg}></AntdIcon>;
};

BrifecaseCrossOutline.displayName = 'BrifecaseCrossOutline';
BrifecaseCrossOutline.inheritAttrs = false;
export default BrifecaseCrossOutline;