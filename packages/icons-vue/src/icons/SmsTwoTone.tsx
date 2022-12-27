// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsTwoTone: SmsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsTwoToneSvg}></AntdIcon>;
};

SmsTwoTone.displayName = 'SmsTwoTone';
SmsTwoTone.inheritAttrs = false;
export default SmsTwoTone;