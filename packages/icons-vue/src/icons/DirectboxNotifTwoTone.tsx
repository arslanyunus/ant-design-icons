// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxNotifTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectboxNotifTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxNotifTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxNotifTwoTone: DirectboxNotifTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxNotifTwoToneSvg}></AntdIcon>;
};

DirectboxNotifTwoTone.displayName = 'DirectboxNotifTwoTone';
DirectboxNotifTwoTone.inheritAttrs = false;
export default DirectboxNotifTwoTone;