// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Export1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export1TwoTone: Export1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export1TwoToneSvg}></AntdIcon>;
};

Export1TwoTone.displayName = 'Export1TwoTone';
Export1TwoTone.inheritAttrs = false;
export default Export1TwoTone;