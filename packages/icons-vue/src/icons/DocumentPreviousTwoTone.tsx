// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentPreviousTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentPreviousTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentPreviousTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentPreviousTwoTone: DocumentPreviousTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentPreviousTwoToneSvg}></AntdIcon>;
};

DocumentPreviousTwoTone.displayName = 'DocumentPreviousTwoTone';
DocumentPreviousTwoTone.inheritAttrs = false;
export default DocumentPreviousTwoTone;