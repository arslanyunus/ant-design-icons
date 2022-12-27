// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoTwoToneSvg from '@ant-design/icons-svg/lib/asn/RedoTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoTwoTone: RedoTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoTwoToneSvg}></AntdIcon>;
};

RedoTwoTone.displayName = 'RedoTwoTone';
RedoTwoTone.inheritAttrs = false;
export default RedoTwoTone;