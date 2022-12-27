// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PasswordCheckTwoToneSvg from '@ant-design/icons-svg/lib/asn/PasswordCheckTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PasswordCheckTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PasswordCheckTwoTone: PasswordCheckTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PasswordCheckTwoToneSvg}></AntdIcon>;
};

PasswordCheckTwoTone.displayName = 'PasswordCheckTwoTone';
PasswordCheckTwoTone.inheritAttrs = false;
export default PasswordCheckTwoTone;