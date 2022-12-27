// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Data2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Data2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Data2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Data2TwoTone: Data2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Data2TwoToneSvg}></AntdIcon>;
};

Data2TwoTone.displayName = 'Data2TwoTone';
Data2TwoTone.inheritAttrs = false;
export default Data2TwoTone;