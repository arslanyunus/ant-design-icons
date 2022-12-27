// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertTwoToneSvg from '@ant-design/icons-svg/lib/asn/ConvertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertTwoTone: ConvertTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertTwoToneSvg}></AntdIcon>;
};

ConvertTwoTone.displayName = 'ConvertTwoTone';
ConvertTwoTone.inheritAttrs = false;
export default ConvertTwoTone;