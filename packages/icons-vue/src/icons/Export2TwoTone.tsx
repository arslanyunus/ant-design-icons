// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Export2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export2TwoTone: Export2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export2TwoToneSvg}></AntdIcon>;
};

Export2TwoTone.displayName = 'Export2TwoTone';
Export2TwoTone.inheritAttrs = false;
export default Export2TwoTone;