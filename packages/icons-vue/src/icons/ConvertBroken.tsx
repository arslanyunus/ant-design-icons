// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertBrokenSvg from '@ant-design/icons-svg/lib/asn/ConvertBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertBroken: ConvertBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertBrokenSvg}></AntdIcon>;
};

ConvertBroken.displayName = 'ConvertBroken';
ConvertBroken.inheritAttrs = false;
export default ConvertBroken;