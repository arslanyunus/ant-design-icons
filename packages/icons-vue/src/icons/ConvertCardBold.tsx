// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertCardBoldSvg from '@ant-design/icons-svg/lib/asn/ConvertCardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertCardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertCardBold: ConvertCardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertCardBoldSvg}></AntdIcon>;
};

ConvertCardBold.displayName = 'ConvertCardBold';
ConvertCardBold.inheritAttrs = false;
export default ConvertCardBold;