// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertBoldSvg from '@ant-design/icons-svg/lib/asn/ConvertBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertBold: ConvertBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertBoldSvg}></AntdIcon>;
};

ConvertBold.displayName = 'ConvertBold';
ConvertBold.inheritAttrs = false;
export default ConvertBold;