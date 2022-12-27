// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartHomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmartHomeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartHomeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartHomeTwoTone: SmartHomeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartHomeTwoToneSvg}></AntdIcon>;
};

SmartHomeTwoTone.displayName = 'SmartHomeTwoTone';
SmartHomeTwoTone.inheritAttrs = false;
export default SmartHomeTwoTone;