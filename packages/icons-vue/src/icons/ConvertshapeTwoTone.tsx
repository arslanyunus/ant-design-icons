// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertshapeTwoToneSvg from '@ant-design/icons-svg/lib/asn/ConvertshapeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertshapeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertshapeTwoTone: ConvertshapeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertshapeTwoToneSvg}></AntdIcon>;
};

ConvertshapeTwoTone.displayName = 'ConvertshapeTwoTone';
ConvertshapeTwoTone.inheritAttrs = false;
export default ConvertshapeTwoTone;