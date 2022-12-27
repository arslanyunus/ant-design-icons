// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForbiddenTwoToneSvg from '@ant-design/icons-svg/lib/asn/ForbiddenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForbiddenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForbiddenTwoTone: ForbiddenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbiddenTwoToneSvg}></AntdIcon>;
};

ForbiddenTwoTone.displayName = 'ForbiddenTwoTone';
ForbiddenTwoTone.inheritAttrs = false;
export default ForbiddenTwoTone;