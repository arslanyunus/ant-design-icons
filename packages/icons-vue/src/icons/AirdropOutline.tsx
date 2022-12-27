// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirdropOutlineSvg from '@ant-design/icons-svg/lib/asn/AirdropOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirdropOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirdropOutline: AirdropOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirdropOutlineSvg}></AntdIcon>;
};

AirdropOutline.displayName = 'AirdropOutline';
AirdropOutline.inheritAttrs = false;
export default AirdropOutline;