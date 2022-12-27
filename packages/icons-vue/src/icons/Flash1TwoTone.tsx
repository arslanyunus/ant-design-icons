// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flash1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Flash1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flash1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flash1TwoTone: Flash1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flash1TwoToneSvg}></AntdIcon>;
};

Flash1TwoTone.displayName = 'Flash1TwoTone';
Flash1TwoTone.inheritAttrs = false;
export default Flash1TwoTone;