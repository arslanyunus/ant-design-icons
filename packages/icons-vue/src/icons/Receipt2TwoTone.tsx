// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Receipt2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt2TwoTone: Receipt2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt2TwoToneSvg}></AntdIcon>;
};

Receipt2TwoTone.displayName = 'Receipt2TwoTone';
Receipt2TwoTone.inheritAttrs = false;
export default Receipt2TwoTone;