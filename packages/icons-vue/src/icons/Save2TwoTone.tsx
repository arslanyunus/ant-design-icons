// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Save2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Save2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Save2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Save2TwoTone: Save2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Save2TwoToneSvg}></AntdIcon>;
};

Save2TwoTone.displayName = 'Save2TwoTone';
Save2TwoTone.inheritAttrs = false;
export default Save2TwoTone;