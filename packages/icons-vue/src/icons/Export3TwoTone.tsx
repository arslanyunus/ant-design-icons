// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Export3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export3TwoTone: Export3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export3TwoToneSvg}></AntdIcon>;
};

Export3TwoTone.displayName = 'Export3TwoTone';
Export3TwoTone.inheritAttrs = false;
export default Export3TwoTone;