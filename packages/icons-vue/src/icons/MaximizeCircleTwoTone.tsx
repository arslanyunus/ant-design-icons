// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MaximizeCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeCircleTwoTone: MaximizeCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeCircleTwoToneSvg}></AntdIcon>;
};

MaximizeCircleTwoTone.displayName = 'MaximizeCircleTwoTone';
MaximizeCircleTwoTone.inheritAttrs = false;
export default MaximizeCircleTwoTone;