// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertOutlineSvg from '@ant-design/icons-svg/lib/asn/ConvertOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertOutline: ConvertOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertOutlineSvg}></AntdIcon>;
};

ConvertOutline.displayName = 'ConvertOutline';
ConvertOutline.inheritAttrs = false;
export default ConvertOutline;