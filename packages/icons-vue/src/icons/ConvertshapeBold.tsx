// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertshapeBoldSvg from '@ant-design/icons-svg/lib/asn/ConvertshapeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertshapeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertshapeBold: ConvertshapeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertshapeBoldSvg}></AntdIcon>;
};

ConvertshapeBold.displayName = 'ConvertshapeBold';
ConvertshapeBold.inheritAttrs = false;
export default ConvertshapeBold;