// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertshapeOutlineSvg from '@ant-design/icons-svg/lib/asn/ConvertshapeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertshapeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertshapeOutline: ConvertshapeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertshapeOutlineSvg}></AntdIcon>;
};

ConvertshapeOutline.displayName = 'ConvertshapeOutline';
ConvertshapeOutline.inheritAttrs = false;
export default ConvertshapeOutline;