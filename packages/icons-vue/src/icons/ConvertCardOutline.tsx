// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertCardOutlineSvg from '@ant-design/icons-svg/lib/asn/ConvertCardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertCardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertCardOutline: ConvertCardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertCardOutlineSvg}></AntdIcon>;
};

ConvertCardOutline.displayName = 'ConvertCardOutline';
ConvertCardOutline.inheritAttrs = false;
export default ConvertCardOutline;