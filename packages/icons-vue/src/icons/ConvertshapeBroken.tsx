// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertshapeBrokenSvg from '@ant-design/icons-svg/lib/asn/ConvertshapeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertshapeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertshapeBroken: ConvertshapeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertshapeBrokenSvg}></AntdIcon>;
};

ConvertshapeBroken.displayName = 'ConvertshapeBroken';
ConvertshapeBroken.inheritAttrs = false;
export default ConvertshapeBroken;