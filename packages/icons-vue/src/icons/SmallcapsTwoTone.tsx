// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmallcapsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmallcapsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmallcapsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmallcapsTwoTone: SmallcapsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallcapsTwoToneSvg}></AntdIcon>;
};

SmallcapsTwoTone.displayName = 'SmallcapsTwoTone';
SmallcapsTwoTone.inheritAttrs = false;
export default SmallcapsTwoTone;