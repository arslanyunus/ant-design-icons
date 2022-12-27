// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertCardBrokenSvg from '@ant-design/icons-svg/lib/asn/ConvertCardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertCardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertCardBroken: ConvertCardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertCardBrokenSvg}></AntdIcon>;
};

ConvertCardBroken.displayName = 'ConvertCardBroken';
ConvertCardBroken.inheritAttrs = false;
export default ConvertCardBroken;